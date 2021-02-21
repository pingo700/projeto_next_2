import api from "../..";
import { IMarcas } from "../../../styles/interfaces/Marcas.interface"

class MarcaData {
  index() {
    return api.get<IMarcas[]>('marcas');
  }
}

export default new MarcaData();