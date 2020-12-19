
import {platillosData} from '../data/PlatillosData';

export const getDishesBySection = ( section ) => {

    return platillosData.filter( dish => dish.section === section);

}