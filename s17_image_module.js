// s17.1: Image Module
import { Image } from 'react';
<Image source={{ uri: 'https://image-source.com/awesomeImage'}} />

// Use a local image
import { Image } from 'react';
<Image source={require('./img/myCoolImage.png')} />

// s17.2: Image Example

class ImageExample extends Component {
  render() {
    return (
      <View>
        <Image style={{ width: 30, height: 30 }}
          source={{ uri: 'http://facebook.github.io/react/img/logo_og.png' }}
        />
      </View>
    );
  }
}

// s17.3: Conditional Image Source

<Image style = {[this.props.imageStyle]}
        source = {this.props.imagePath
        ? this.props.imagePath
        : require('../theme/images/resource.png')
/>

// s17.4: Using variable for image path

let imagePath = require("../../assets/list.png");

<Image style={{ height: 50, width: 50 }} source={imagePath} />

// From external resource:

<Image style={{ height: 50, width: 50}} source={{ uri: userData.image }} />

// s17.5: To fit an Image

// Other resizeMode = cover, stretch, repeat, center
  
<Image
  resizeMode = "contain"
  style={{ height: 100, width: 100 }}
  source={ require('../assets/image.png') }
/>
