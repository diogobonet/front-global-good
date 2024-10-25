import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Biblioteca para chamadas HTTP, caso use axios

const ProtectedRoute = ({ children, allowedUserTypes }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAccess = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        // Faz a chamada para verificar o tipo do usuário
        const response = await axios.get('http://localhost:3001/users', {
          headers: { Authorization: `Bearer ${token}` }
        });
        const userType = response.data.user_type;

        // Verifica se o user_type está na lista de tipos permitidos
        if (!allowedUserTypes.includes(userType)) {
          navigate('/notfound'); // Redireciona para uma página de acesso não autorizado
        }
      } catch (error) {
        console.error('Erro ao verificar o tipo de usuário:', error);
        navigate('/login'); // Redireciona para login em caso de erro
      }
    };

    checkAccess();
  }, [navigate, allowedUserTypes]);

  return children;
};

export default ProtectedRoute;
