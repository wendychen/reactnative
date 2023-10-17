import PostsList from './PostsList';

class PostsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
    }
  }

  getDataSource(posts: Array<any>): ListView.DataSource {
    if (!posts) return;
    return this.state.dataSource.cloneWithRows(posts);
  }

  componentDidMount() {
    this.setState({ dataSource: this.getDataSource(this.props.posts)});
  }

  componentWillReceiveProps(props) {
    this.setState({ dataSource: this.getDataSource(props.posts) });
  }

  renderRow = (post) = {
    return (
      <View>
        <Text>{post.title}</Text>
        <Text>{post.content}</Text>
      </View>
    );
  }

  render() {
    return (
      <ListView
        dataSource = {this.staet.dataSource}
        renderRow = {this.renderRow}
        enableEmptySections = {true}
      />
    );
  }
}
