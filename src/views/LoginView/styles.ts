import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLogin: {
    flex: 1
  },
  loginContainer: {
    width: 250,
    height: 250,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 20,
    borderRadius: 30,
    elevation: 5,
  },
  titleContainer: {
    marginBottom: 20,
    padding: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginBottom: 20,
    fontSize: 15,
  },
  buttonRegistration: {
    borderWidth: 2,
    borderRadius: 30,
    borderColor: '#181818',
    padding: 10,
    marginBottom: 15
  },
  buttonLogin: {
    backgroundColor: '#181818',
    borderRadius: 30,
    padding: 10,
  },
  textButton: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  iconModal: {
    paddingVertical: 18
  },
  modalView: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: '#181818',
    borderRadius: 30,
    paddingVertical: 18,
    paddingHorizontal: 50,
  },
  textButtonModal: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});