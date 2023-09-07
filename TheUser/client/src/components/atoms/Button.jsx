import './Button.scss'

const Button = ({name, func}) => {
    return (
        <button type="submit" onClick={func}>{name}</button>
    );
};

export default Button;