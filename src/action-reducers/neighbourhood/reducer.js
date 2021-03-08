import {UPDATE_STEP_INDEX} from './actionTypes';

const initialState = {
  neighbourhood: [
    'Bishan',
    'Bukit Merah',
    'Bukit Timah',
    'Downtown Core',
    'Geylang',
    'Kallang',
    'Marina East',
    'Marina South',
    'Marine Parade',
    'Museum',
    'Newton',
    'Novena',
    'Orchard',
    'Outram',
    'Queenstown',
    'River Valley',
    'Rochor',
    'Singapore River',
    'Southern Islands',
    'Straits View',
    'Tanglin',
    'Toa Payoh',
    'Bedok',
    'Changi',
    'Changi Bay',
    'Pasir Ris',
    'Paya Lebar',
    'Tampines',
    'Central Water Catchment',
    'Lim Chu Kang',
    'Mandai',
    'Sembawang',
    'Simpang',
    'Sungei Kadut',
    'Woodlands',
    'Yishun',
    'Ang Mo Kio',
    'Hougang',
    'North-Eastern Islands',
    'Punggol',
    'Seletar',
    'Sengkang',
    'Serangoon',
    'Boon Lay',
    'Bukit Batok',
    'Bukit Panjang',
    'Choa Chu Kang',
    'Clementi',
    'Jurong East',
    'Jurong West',
    'Pioneer',
    'Tengah',
    'Tuas',
    ' Western Islands',
  ],
};

export const neighbourhoodReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
