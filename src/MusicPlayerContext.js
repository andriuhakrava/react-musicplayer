import React, { useState } from 'react';
import MonatikSilno from './monatikSilno.mp3';
import MonatikVitaminD from './monatikVitaminD.mp3';
import MonatikZashivaetDushu from './monatikZashivaetDushu.mp3';

const MusicPlayerContext = React.createContext([{}, () => {}]);

const MusicPlayerProvider = props => {
	const [state, setState] = useState({
		audioPlayer: new Audio(),
		tracks: [
			{
        name: 'Monatik - Silno',
        file: MonatikSilno
      },
      {
        name: 'Monatik - Vitamin D',
        file: MonatikVitaminD
      },
      {
        name: 'Monatik - Zashivaet Dushu',
        file: MonatikZashivaetDushu
      },
		],
		currentTrackIndex: null,
		isPlaying: false
	});
	return (
		<MusicPlayerContext.Provider value={[state, setState]}>
			{ props.children }
		</MusicPlayerContext.Provider>
	);
};

export { MusicPlayerContext, MusicPlayerProvider };