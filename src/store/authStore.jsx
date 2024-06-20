import create from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
	persist(
		(set) => ({
			isLoggedIn: false,
			loginId: null,
			token: null,
			login: (id, token) => set(
				{
					isLoggedIn: true,
					loginId: id,
					token: token
				}),
			logout: () => set(
				{
					isLoggedIn: false,
					loginId: null,
					token: null
				}),
		}),
		{
			name: 'auth-storage',
			getStorage: () => sessionStorage,
		}
	)
);

export default useAuthStore;
