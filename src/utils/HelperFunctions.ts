import {Alert, Platform} from 'react-native';
import RNFetchBlob from 'react-native-blob-util';
import {saveStringStorage} from './storage/storage';

// Get Directory path
export const getDirectoryPath = (iOSDownload = false) => {
  let directory = RNFetchBlob.fs.dirs.DocumentDir;
  if (Platform.OS === 'ios') {
    directory = iOSDownload ? RNFetchBlob.fs.dirs.DocumentDir : 'file://' + RNFetchBlob.fs.dirs.DocumentDir;
  }
  return `${directory}`;
};

// Use for saving audio in local path
export const getDownloadTitle = (url = '') => {
  let _url = '';
  _url = url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('.mp4'));
  _url = _url.replace(/[^a-zA-Z ]/g, '_');
  return `${_url}.mp4`;
};

export const downloadVideoToAppStorage = async (videoUrl: string, videoId: string) => {
  try {
    // constant
    const title = getDownloadTitle(videoUrl);
    const filePath = `${getDirectoryPath(true)}/${title}`;
    const fileExt = 'mp4';

    const configOptions = Platform.select({
      ios: {
        fileCache: true,
        path: filePath,
        appendExt: fileExt,
        notification: true,
      },
      android: {
        fileCache: true,
        path: filePath,
        appendExt: fileExt,
        notification: true,
      },
    });
    console.debug('🟢 ~ downloadVideoToAppStorage ~ configOptions:', configOptions);
    const downloadPath = await RNFetchBlob.config(configOptions).fetch('GET', videoUrl);
    console.debug('🟢 ~ downloadVideoToAppStorage ~ downloadPath:', downloadPath);
    // setVideo(downloadPath);
    saveStringStorage(videoId, filePath);
    return {
      downloaded: true,
      path: filePath,
    };
  } catch (error) {
    console.error('Error downloading video:', error);
    Alert.alert('Error', 'Failed to download video. Please try again.');
    return {
      downloaded: false,
      path: '',
    };
  }
};
