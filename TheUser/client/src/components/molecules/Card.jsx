import axios from 'axios';

import Input from '../atoms/Input.jsx';
import Button from '../atoms/Button.jsx';
import Modal from '../molecules/Modal.jsx';

import useInput from '../../hooks/useInput.jsx';

import './Card.scss';
import { useState } from 'react';

const Card = ({ user, getData }) => {
    const [modalActive, setModalActive] = useState(false);

    const _username = useInput('', true);
    const _userlastname = useInput('', true);
    const _userphone = useInput('', true);
    const _usercity = useInput('', true);

    const handlerEditUser = (e) => {
        e.preventDefault();

        try {
            const data = {
                "id": user.id,
                "name": _username.value,
                "lastname": _userlastname.value,
                "phone": _userphone.value,
                "city": _usercity.value,
            }
            axios.put(`http://localhost:5223/api/Users?id=${user.id}`, data).then(() => {
                getData();
                setModalActive(false);
            })
        } catch (error) {
            console.error(error);
        }
    }

    const handlerDeleteUser = () => {
        try {
            axios.delete(`http://localhost:5223/api/Users/${user.id}`).then(() => {
                getData();
            })
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div className="container-user__card">
                <div className="card__header">
                    <span>{user.name}</span>
                    <span>{user.lastname}</span>
                </div>
                <div className="card__main">
                    <span>{user.phone}</span>
                    <span>{user.city}</span>
                </div>
                <div className="card__footer">
                    <Button name="Edit" func={() => { setModalActive(true); }} />
                    <Button name="Delete" func={handlerDeleteUser} />
                </div>
            </div>

            <Modal active={modalActive} setActive={setModalActive}>
                <form onSubmit={handlerEditUser} className="form-authorization">
                    <div className="auth-header">
                        Edit User!
                    </div>
                    <Input type='text' inputId='name' holderTitle="Name" inputObject={_username} />
                    <Input type='text' inputId='lastname' holderTitle="Lastname" inputObject={_userlastname} />
                    <Input type='text' inputId='phone' holderTitle="Phone" inputObject={_userphone} />
                    <Input type='text' inputId='city' holderTitle="City" inputObject={_usercity} />
                    <Button name="Edit" />
                </form>
            </Modal>
        </>
    );
}

export default Card;