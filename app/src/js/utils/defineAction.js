export const defineAction =
	(raiz, sufijos) =>
		sufijos.reduce((acc, sufijo) =>
			Object.assign({}, acc, { [`${sufijo}`]: `${raiz}::${sufijo}` }),
		{});
