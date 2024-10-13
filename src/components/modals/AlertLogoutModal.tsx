import React, {useState} from 'react';
import {Modal, TouchableHighlight, View, Alert, StyleSheet} from 'react-native';
import {COLORS} from '../../theme';
import {FONTS} from '../../assets/fonts';
import AppText from '../common/AppText';
import {signOut} from '../../store/authSlice/authApiService';

interface ModalTypes {
  visible: boolean;
  setVisible: (date: boolean) => void;
}

const AlertLogoutModal = ({visible = false, setVisible = () => {}}: ModalTypes) => {
  // state
  const [loading, setLoading] = useState<boolean>(false);
  // loading={loading}

  const userSignOut = async () => {
    try {
      setLoading(true);
      await signOut();
      setLoading(false);
    } catch (error) {
      console.log('🚀 ~ signOut ~ error:', error);
      setLoading(false);
    }
  };

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalView}>
          <AppText style={styles.modalTitle} transText={'logout'} />
          <AppText style={styles.modalText} transText={'logouts'} />
          <View style={styles.logout}>
            <TouchableHighlight
              style={styles.yes}
              onPress={() => {
                setVisible(!visible);
                userSignOut();
              }}>
              <AppText style={styles.confirmButton} transText={'yes'} />
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.yes}
              onPress={() => {
                setVisible(!visible);
              }}>
              <AppText style={styles.cancelButton} transText={'no'} />
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AlertLogoutModal;

const styles = StyleSheet.create({
  confirmButton: {
    backgroundColor: COLORS.yellow,
    color: COLORS.white,
    borderBottomLeftRadius: 10,
    height: 50,
    paddingTop: 15,
    textAlign: 'center',
    fontFamily: FONTS.rechargebd,
    fontSize: 16,
  },

  cancelButton: {
    backgroundColor: COLORS.lightBlackSix,
    color: COLORS.yellow,
    borderBottomRightRadius: 10,
    fontSize: 16,
    fontFamily: FONTS.rechargebd,
    height: 50,
    textAlign: 'center',
    paddingTop: 15,
  },
  logout: {
    flexDirection: 'row',
    width: '100%', // Adjust width to fit buttons properly
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 3, 19, 0.7)',
  },
  modalView: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    bottom: 250,
    borderRadius: 20,
    elevation: 5,
    height: 221,
    position: 'absolute',
    shadowColor: COLORS.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: '90%', // Adjust width to less than 100%
    marginLeft: '5%', // Center the modal
  },
  modalTitle: {
    color: COLORS.black,
    fontFamily: FONTS.rechargebd,
    fontSize: 24,
    marginBottom: 15,
    paddingTop: 30,
    textAlign: 'center',
  },
  modalText: {
    color: COLORS.black,
    fontFamily: FONTS.interRegular,
    fontSize: 18,
    paddingTop: 20,
    textAlign: 'center',
  },
  yes: {
    marginTop: 53,
    width: '50%',
  },
});
