import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useVideoPlayer, VideoView} from "expo-video";

const defaultVideoSource = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

export default function App() {
  const player = useVideoPlayer(defaultVideoSource, player => {
    player.loop = true;
  })

  return (
    <View style={styles.container}>
      <VideoView player={player} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  videoPlayerContainer: {
    ...StyleSheet.absoluteFill,
    flex: 1,
    zIndex: 1,
  }
});
