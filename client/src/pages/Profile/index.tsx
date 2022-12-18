import Form from '../../components/form';
import { logoutUser } from '../../store/Auth/AuthActions';
import { useAuth } from '../../store/Auth/AuthContext';

export default function ProfilePage() {
    const { dispatch } = useAuth();

    const handleClick = () => {
        logoutUser(dispatch);
    };

    return (
        <div>
            <Form.Button title="Logout" onClick={handleClick} />
        </div>
    );
}
