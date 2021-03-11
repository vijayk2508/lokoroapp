import {UPDATE_STEP_INDEX} from './actionTypes';

const initialState = {
  neighbourhoodList: [
    {label: 'Bishan'},
    {label: 'Bukit Merah'},
    {label: 'Bukit Timah'},
    {label: 'Downtown Core'},
    {label: 'Geylang'},
    {label: 'Kallang'},
    {label: 'Marina East'},
    {label: 'Marina South'},
    {label: 'Marine Parade'},
    {label: 'Museum'},
    {label: 'Newton'},
    {label: 'Novena'},
    {label: 'Orchard'},
    {label: 'Outram'},
    {label: 'Outram'},
    {label: 'Queenstown'},
    {label: 'River Valley'},
    {label: 'Rochor'},
    {label: 'Singapore River'},
    {label: 'Southern Islands'},
    {label: 'Straits View'},
    {label: 'Tanglin'},
    {label: 'Toa Payoh'},
    {label: 'Bedok'},
    {label: 'Changi'},
    {label: 'Changi Bay'},
    {label: 'Pasir Ris'},
    {label: 'Paya Lebar'},
    {label: 'Tampines'},
    {label: 'Central Water Catchment'},
    {label: 'Lim Chu Kang'},

    {label: 'Mandai'},
    {label: 'Sembawang'},
    {label: 'Simpang'},

    {label: 'Sungei Kadut'},
    {label: 'Woodlands'},
    {label: 'Yishun'},

    {label: 'Ang Mo Kio'},
    {label: 'Hougang'},
    {label: 'North-Eastern Islands'},

    {label: 'Punggol'},
    {label: 'Seletar'},
    {label: 'Sengkang'},
    {label: 'Serangoon'},
    {label: 'Hougang'},
    {label: 'Boon Lay'},
    {label: 'Bukit Batok'},
    {label: 'Bukit Panjang'},
    {label: 'Choa Chu Kang'},

    {label: 'Clementi'},
    {label: 'Jurong East'},
    {label: 'Jurong West'},
    {label: 'Pioneer'},
    {label: 'Tengah'},
    {label: 'Tuas'},
    {label: 'Western Islands'},
  ],
};

export const neighbourhoodReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
