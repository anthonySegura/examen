
// Consulta la lista de departamentos
async function getDivisions() {
    // Por el momento retorna los datos quemados, el api debe devolver un JSON con este formato
    return {
        divisions: [
            {
                id: '1',
                nombre: 'Asamblea de Socios',
                jefatura: '-',
                marcado: false
            },
            {
                id: '2',
                nombre: 'Gerente General',
                jefatura: 'Asamblea de Socios',
                marcado: false
            },
            {
                id: '3',
                nombre: 'Departamento Administrativo',
                jefatura: 'Gerente General',
                marcado: false
            },
            {
                id: '4',
                nombre: 'Departamento Comercial',
                jefatura: 'Gerente General',
                marcado: false
            }
        ]
    };
}

export {getDivisions}