const {Text, View, StyleSheet, Dimensions} = require('react-native');
import Icon from 'react-native-vector-icons/AntDesign';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Card1 = ({icon, head, main , sens}) => {
  return (
    <View style={styles.container(sens)}>
      <Icon style={styles.linksIcon} name={icon} size={30} />
      <View style={{
        paddingLeft : sens === 0 ? 2 : 20
       }}>
        <Text style={styles.head}>{head}</Text>
        <Text style={styles.main}>{main}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: (sens) => ({
    width: width - 20,
    display: 'flex',
    flexDirection: sens === 0 ? 'row' : 'row-reverse',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 5,
    margin : 5
  }),
  linksIcon: {
    width: 'auto',
    padding: 5,
    margin : 7
  },
  head: {
    textAlign: 'justify',
    width: width-70,
    fontSize: height < 700 ? 18 : 20,
    fontWeight: '700',
  },
  main:  {
    paddingRight : 10,
    paddingLeft : 10,
    textAlign: 'justify',
    width: width-100,
    fontSize: 16,
    fontWeight: '300',
  },
});

export default Card1;
