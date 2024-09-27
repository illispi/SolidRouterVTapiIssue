import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import VtApi from "./components/VtApi";

export default function App() {
	return (
		<Router
			root={(props) => (
				<MetaProvider>
					<Title>SolidStart - Basic</Title>
					<Suspense>
						<a href="/A">A</a>
						<a href="/B">B</a>
						<a href="/C">C</a>
						<VtApi>{props.children}</VtApi>
					</Suspense>
				</MetaProvider>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
