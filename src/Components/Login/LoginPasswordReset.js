import React from 'react'
import Head from '../Helper/Head'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_RESET } from '../../Api'
import Error from '../Helper/Error'
import { useNavigate } from 'react-router-dom';

const LoginPasswordReset = () => {
   const [login, setLogin] = React.useState('');
   const [key, setKey] = React.useState('');
   const password = useForm();
   const { loading, error, request } = useFetch();
   const navigate = useNavigate();

   async function handleSubmit(e) {
      e.preventDefault();

      if (password.validate) {
         const { url, options } = PASSWORD_RESET({
            login: login,
            key: key,
            password: password.value
         });
         const { response } = await request(url, options);

         if (response.ok) navigate('/login');
      }
   }

   React.useEffect(() => {
      const params = new URLSearchParams(window.location.search);
      const key = params.get('key');
      const login = params.get('login');

      if (key) setKey(key);
      if (login) setLogin(login);
   }, []);

   return (
      <section className="animeLeft">
         <Head title="Resetar senha" />

         <h1 className="title">Redefinir senha</h1>
         <form onSubmit={handleSubmit}>
            <Input label="Nova senha" type="text" name="password" {...password} />
            {loading ? (
               <Button disabled>Resetando...</Button>
            ) : (
               <Button>Resetar</Button>
            )}
         </form>
         <Error error={error} />
      </section>
   )
}

export default LoginPasswordReset
