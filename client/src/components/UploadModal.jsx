import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DropZone from './DropZone';
import { useCreateUploadMutation } from '../features/upload/uploadApiSlice';
import { useCreateMessageMutation } from '../features/message/messageApiSlice';

export default function UploadModal({ open, setOpen, chatId }) {
    const [files, setFiles] = React.useState([]);
    const [createUpload] = useCreateUploadMutation();
    const [createMessage] = useCreateMessageMutation();


    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
                component: 'form',
                onSubmit: async (event) => {
                    event.preventDefault();
                    try {
                        if (files) {
                            const filesIds = await Promise.all(
                                files.map(async (file) => {
                                    const formData = new FormData();
                                    formData.append('file', file);
                                    const res = await createUpload(formData);
                                    if (res.data) {
                                        return res.data._id;
                                    }
                                    return;
                                })
                            );
                            console.log(filesIds)
                            await Promise.all(
                                filesIds.map(async (fileId) => {
                                    const messageObject = {
                                        upload: fileId,
                                        type: 'media',
                                        chat: chatId,
                                    };
                                    return createMessage(messageObject);
                                })
                            );
                        }
                        handleClose();
                    } catch (error) {
                        console.log(error)
                    }
                },
            }}
        >
            <DialogTitle>upload a file</DialogTitle>
            <DialogContent>
                <DropZone setFilesForParent={setFiles} />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Subscribe</Button>
            </DialogActions>
        </Dialog>
    );
}