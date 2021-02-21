import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GiSkateboard } from "react-icons/gi";
import { Container } from "./styles";
import { Link } from "../../styles";
import { apimarcas } from "../../api/data/marca"
import { IMarcas } from "../../styles/interfaces/Marcas.interface";



const Header = () => {
    const router = useRouter();
    const [marcas, setMarcas] = useState <IMarcas[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await apimarcas.index();
            setMarcas(response.data);
          };
          fetchData();
        }, []);

    return(
      <Container>
        <div className="container">
          <GiSkateboard onClick={() => router.push("/")} />
          {marcas &&
          marcas.map((item) => (
            <Link key={item.id} href={`/${item.qualidade}`}>
              {item.nome}
            </Link>
          ))}
        </div>
      </Container>
    );
  };
  
  export default Header;