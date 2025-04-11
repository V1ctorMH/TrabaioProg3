import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  const [tela, setTela] = useState('Login');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [contatos, setContatos] = useState([
    { id: 1, nome: 'João da Silva', telefone: '(11) 99999-9999' },
    { id: 2, nome: 'Maria Oliveira', telefone: '(21) 88888-8888' },
    { id: 3, nome: 'Pedro Santos', telefone: '(31) 77777-7777' },
  ]);
  const [contatoEditando, setContatoEditando] = useState(null); 

  const adicionarContato = () => {
    if (nome && telefone) {
      setContatos([
        ...contatos,
        { id: contatos.length + 1, nome, telefone }
      ]);
      setNome('');
      setTelefone('');
      setTela('Lista');
    }
  };

  const editarContato = () => {
    if (contatoEditando) {
      const contatosAtualizados = contatos.map(contato =>
        contato.id === contatoEditando.id ? { ...contato, nome, telefone } : contato
      );
      setContatos(contatosAtualizados);
      setNome('');
      setTelefone('');
      setTela('Lista');
      setContatoEditando(null);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Tela de Login */}
      {tela === 'Login' && (
        <>
          <Text style={styles.title}>Tela de Login</Text>
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
          <Button title="Entrar" onPress={() => setTela('Lista')} />
          <Button title="Ir para Cadastro de Usuário" onPress={() => setTela('CadastroUsuario')} />
        </>
      )}

      {/* Tela de Cadastro de Usuário */}
      {tela === 'CadastroUsuario' && (
        <>
          <Text style={styles.title}>Cadastro de Usuário</Text>
          <TextInput style={styles.input} placeholder="Nome" />
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
          <Button title="Cadastrar" onPress={() => setTela('Login')} />
          <Button title="Voltar" onPress={() => setTela('Login')} />
        </>
      )}

      {/* Tela de Lista de Contatos */}
      {tela === 'Lista' && (
        <>
          <Text style={styles.title}>Lista de Contatos</Text>
          {contatos.map((contato) => (
            <View key={contato.id}>
              <Text>{contato.nome} - {contato.telefone}</Text>
              <Button title="Editar" onPress={() => {
                setNome(contato.nome);
                setTelefone(contato.telefone);
                setContatoEditando(contato);
                setTela('CadastroContato');
              }} />
            </View>
          ))}
          <Button title="Cadastrar Contato" onPress={() => setTela('CadastroContato')} />
          <Button title="Sair" onPress={() => setTela('Login')} />
        </>
      )}

      {/* Tela de Cadastro de Contato */}
      {tela === 'CadastroContato' && (
        <>
          <Text style={styles.title}>Cadastro de Contato</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome do contato"
            value={nome}
            onChangeText={setNome}
          />
          <TextInput
            style={styles.input}
            placeholder="Telefone"
            value={telefone}
            onChangeText={setTelefone}
            keyboardType="phone-pad"
          />
          <Button
            title={contatoEditando ? "Salvar Alterações" : "Salvar Contato"}
            onPress={contatoEditando ? editarContato : adicionarContato}
          />
          <Button title="Voltar para Lista" onPress={() => setTela('Lista')} />
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
