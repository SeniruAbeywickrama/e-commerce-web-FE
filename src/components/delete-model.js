import React from 'react'
import {
    ModalHeader,
    ModalContent,
    ModalActions,
    Button,
    Icon,
    Modal,
} from 'semantic-ui-react'
import axios from "axios";
import base_url from "../config";

function exampleReducer(state, action) {
    switch (action.type) {
        case 'close':
            return { open: false }
        case 'open':
            return { open: true, size: action.size }
        default:
            throw new Error('Unsupported action...')
    }
}


const DeleteModel = (props) => {
    const [state, dispatch] = React.useReducer(exampleReducer, {
        open: false,
        size: undefined,
    })
    const { open, size } = state

    /* Delete product function */
    const getProductData = async () => {
        // DELETE request using axios with set headers
        const headers = {
            sku: props.props,
        };
        axios.delete(base_url + "productRoute/delete-product", { headers })
            .then(() => console.log("Delete successfully"))
            .catch(error => {
            console.error('There was an error!', error);
        });
        window.location.reload();
    }

    return (
        <>
            <Button icon onClick={() => dispatch({ type: 'open', size: 'tiny' })}  color='blue'>
                <Icon name={props.icon} />
            </Button>

            <Modal
                size={size}
                open={open}
                onClose={() => dispatch({ type: 'close' })}
            >
                <ModalHeader>Delete Your Account</ModalHeader>
                <ModalContent>
                    <p>Are you sure you want to delete your account</p>
                </ModalContent>
                <ModalActions>
                    <Button negative onClick={() => dispatch({ type: 'close' })}>
                        No
                    </Button>
                    <Button positive onClick={getProductData}>
                        Yes
                    </Button>
                </ModalActions>
            </Modal>
        </>
    )
}

export default DeleteModel
