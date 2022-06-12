import { useEffect, useState } from 'react'
import axios from 'axios'

const characterApi = resident => {
  /* Aca hago el segundo llamado a la API y guardo la info en character,
    Luego importo el hooks en el componente ResindentInfo y le paso por props resindent.
   */
    const [character, setCharacter] = useState();

  useEffect(() => {
    axios
      .get(resident)
      .then((res) => setCharacter(res.data))
      .catch((err) => console.log(err));
  }, []);
  return character
}

export default characterApi