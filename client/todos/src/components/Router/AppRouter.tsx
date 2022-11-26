import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Routs } from '../../routes';
const AppRouter = () => {
  return (
		<Routes>
			{
				Routs.map(({ path, Component }) => (
					<Route key={path} path={path} element={Component}  />
				))}
		</Routes>
	);
}

export default AppRouter