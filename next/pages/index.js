import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Container from "react-bootstrap/Container";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function Home() {
	const [category, setCategory] = useState(null);
	const [apps, setApps] = useState([]);

	const handleCategoryClick = async (category) => {
		await sleep(1000);
		setCategory(category);
	};

	const handleAppClick = (appId) => {
		const selectedApp = apps[appId];
		console.log("Detalles de la aplicación:", selectedApp);
	};

	const appData = [
		{
			name: "Asistente Copy",
			category: "Asistentes",
			description: "Descripción 1",
		},
		{
			name: "Asistente Dev",
			category: "Asistentes",
			description: "Descripción 2",
		},
		{
			name: "Asistente Digital",
			category: "Asistentes",
			description: "Descripción 3",
		},
		{
			name: "Asistente Sonido",
			category: "Asistentes",
			description: "Descripción 4",
		},
		{ name: "Editor CV", category: "Editores", description: "Descripción 5" },
		{
			name: "Editor Filme",
			category: "Editores",
			description: "Descripción 6",
		},
		{ name: "Editor Foto", category: "Editores", description: "Descripción 7" },
		{ name: "Editor Logo", category: "Editores", description: "Descripción 8" },
		{
			name: "Texto a Búsqueda",
			category: "Generadores",
			description: "Descripción 9",
		},
		{
			name: "Texto a Imagen",
			category: "Generadores",
			description: "Descripción 10",
		},
		{
			name: "Texto a Sonido",
			category: "Generadores",
			description: "Descripción 11",
		},
		{
			name: "Texto a Video",
			category: "Generadores",
			description: "Descripción 12",
		},
	];

	const filteredApps = category
		? appData.filter((app) => app.category === category)
		: appData;

	return (
		<div>
			<header className="text-center py-6">
				<Container>
					<div className="flex items-center justify-between">
						<div>
							<Image src="/logo.png" alt="Logo" width={40} height={40} />
						</div>
						<div>
							<h1 className="text-2xl font-bold">Table-Board</h1>
							<p>!</p>
						</div>
					</div>
				</Container>
			</header>

			<Container className="max-w-2xl mx-auto p-5">
				<Head>
					<title></title>
				</Head>

				<div className="flex justify-center mb-4">
					<div className="mr-4">
						<a
							href="#"
							className="text-blue-500 hover:text-blue-600"
							onClick={() => handleCategoryClick(null)}
						>
							Todas
						</a>
					</div>
					<div className="mr-4">
						<a
							href="#"
							className="text-blue-500 hover:text-blue-600"
							onClick={() => handleCategoryClick("Asistentes")}
						>
							Asistentes
						</a>
					</div>
					<div className="mr-4">
						<a
							href="#"
							className="text-blue-500 hover:text-blue-600"
							onClick={() => handleCategoryClick("Editores")}
						>
							Editores
						</a>
					</div>
					<div className="mr-4">
						<a
							href="#"
							className="text-blue-500 hover:text-blue-600"
							onClick={() => handleCategoryClick("Generadores")}
						>
							Generadores
						</a>
					</div>
				</div>

				<div className="flex flex-wrap">
					{filteredApps.map((app, index) => (
						<div
							key={index}
							className="bg-gray-200 rounded-md p-4 m-2 flex flex-col justify-between"
						>
							<h3 className="text-lg font-semibold">{app.name}</h3>
							<p className="text-sm">{app.description}</p>
							<button
								className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
								onClick={() => handleAppClick(index)}
							>
								Ver
							</button>
						</div>
					))}
				</div>
			</Container>
		</div>
	);
}
