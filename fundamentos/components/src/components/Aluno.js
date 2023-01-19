const Aluno = () => {
    const aluno = {
        nome: 'Alunos',
        idade: 30,
        endereco: {
            rua: 'Rua tal',
            n: 45,
            cep: 26113470
        }
    }
    return(
        <div>
            {aluno.nome} - {aluno.idade} - {aluno.endereco.rua}
        </div>
    )
}

export default Aluno