import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
 
    componentWillMount() {
        //This code will know what to render on the screen
        //depending on where users scroll to
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r1
        });

        //provide data to be rendered on the screen
        this.dataSource = ds.cloneWithRows(this.props.libraries)
    }

    renderRow(library) {
        return <ListItem library={library}/>
    }

    render() {
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
             />

        )

    }
}

const mapStateToProps = state => {
   return { libraries: state.libraries }
}

export default connect(mapStateToProps)(LibraryList);
