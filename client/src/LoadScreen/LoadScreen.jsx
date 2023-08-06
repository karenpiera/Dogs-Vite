import React from 'react';
import Woof from '../../public/cargando.gif';
import './LoadScreen.css';

const LoadScreen = ({ setLoading }) => {
	setTimeout(() => {
		setLoading(false);
	}, 2000);

	return (
		<>
			<div className="loadingContainer">
				<img src={Woof} alt="" />
			</div>
		</>
	);
};

// Asignamos un nombre al componente exportado
LoadScreen.displayName = 'LoadScreen';

export default LoadScreen;


