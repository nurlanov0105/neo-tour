import { useAppSelector } from '@/app/appStore';

export function useAuth() {
   const { email, id, token } = useAppSelector((state) => state.user);

   return {
      isAuth: !!email,
      email,
      token,
      id,
   };
}
