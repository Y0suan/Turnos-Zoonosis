import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Inicio } from "@/components/Inicio";
import { Turnos } from "@/components/Turnos";
import { DiasdeAtencion } from "@/components/DiasdeAtencion";
import { Ubicacion } from "@/components/Ubicacion";

export default function Home() {
	return (
		<section className=" w-[100%] overflow-hidden ">
			<Inicio/>
			<Turnos/>
			<Ubicacion/>
			<DiasdeAtencion/>
		</section>
	);
}
