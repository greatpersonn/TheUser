import axios from 'axios';

import Input from '../atoms/Input.jsx';
import Button from '../atoms/Button.jsx';
import useInput from '../../hooks/useInput.jsx';

import './Create.scss';

const Create = ({ getData }) => {
    const _username = useInput('', true);
    const _userlastname = useInput('', true);
    const _userphone = useInput('', true);
    const _usercity = useInput('', true);

    const hanlderSubmit = (e) => {
        e.preventDefault();

        try {
            const data = {
                "name": _username.value,
                "lastname": _userlastname.value,
                "phone": _userphone.value,
                "city": _usercity.value
            }

            axios.post('http://localhost:5223/api/Users', data).then((result) => {
                getData();
            })
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="container-create__form">
            <form onSubmit={hanlderSubmit} className="form-authorization">
                <div className="auth-header">
                    Create User!
                </div>
                <Input type='text' inputId='name' holderTitle="Name" inputObject={_username} />
                <Input type='text' inputId='lastname' holderTitle="Lastname" inputObject={_userlastname} />
                <Input type='text' inputId='phone' holderTitle="Phone" inputObject={_userphone} />
                <Input type='text' inputId='city' holderTitle="City" inputObject={_usercity} />
                <Button name="Create" />
            </form>
        </div>
    );
}

export default Create;