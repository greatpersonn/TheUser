import Button from './Button.jsx';

import './Card.scss';

const Card = ({ user }) => {
    const handlerEditUser = async () => {
        try {

        } catch (error) {
            console.error(error);
        }
    }

    const handlerDeleteUser = async () => {
        try {

        } catch (error) {
            console.error(error);
        }
    }

    return (
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
                <Button name="Edit" onClick={handlerEditUser} />
                <Button name="Delete" onClick={handlerEditUser} />
            </div>
        </div>
    );
}

export default Card;