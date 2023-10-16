import React, {useState} from "react";
import { View, Text, FlatList, Image, StyleSheet, TextInput, Button } from "react-native";


const CommentPage = () => {

  const [commentsData, setcommentsData] = useState([
    {key: 0, id: 0, author: "John Doe", tagline: "This is a great post!",ProfileImage : require('../components/homepage/profileImages/pic-1.png'), comment : 'Thank You for your advice.' },
    {key: 1, id: 1, author: "Maria Thomas", tagline: "Great Job!",ProfileImage : require('../components/homepage/profileImages/pic-2.png'), comment : 'Just use the mentioned fertilizers. ' },
    {key: 2, id: 2, author: "Hiroshi Nohara", tagline: "This is a great post!",ProfileImage : require('../components/homepage/profileImages/pic-3.png'), comment : 'Will look into it.Let you know soon.' },
  ]);

  const [newComment, setNewComment] = useState('');

  const handleInputChange = (text) => {
    setNewComment(text);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      // Create a new comment object with a unique ID
      const newCommentObject = {
        id: commentsData.length + 1,
        author: "Rosy Swift", // You can set this dynamically if needed
        tagline: "Great Job!", // You can set this dynamically if needed
        ProfileImage: require('../components/homepage/profileImages/pic-4.png'), // You can set this dynamically if needed
        comment: newComment,
      };

      // Update the state with the new comment
      setcommentsData([...commentsData, newCommentObject]);
      setNewComment('');
    }
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.header}>Comments</Text>
      <FlatList
        data={commentsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.commentContainer}>
            <View style={styles.profileImageContainer}>
            <Image style={styles.profileImage} source={item.ProfileImage} />
            </View>
            
            <View style={styles.ReadingContainer}>
              <Text style={styles.author}>{item.author}</Text>
              <Text style={styles.tagline}>{item.tagline}</Text>
              <View style={styles.textContainer}>
                <Text style={styles.text}>
                  {item.comment}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          multiline
          placeholder="Add a new comment..."
          style={styles.input}
          value={newComment}
          onChangeText={handleInputChange}
        />
        <Button style={styles.addCommentButton}  title="Add" onPress={handleAddComment} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop:20,
    marginLeft:20,
  }, 
  commentContainer: {
    marginBottom: 16,
    display:'flex',
    flexDirection: 'row',
    padding:2,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginLeft:10,
  },
  profileImageContainer:{
    height:50,
    width:50,
  },
  profileImage:{
     height:'100%',
     width:'100%',
     borderRadius:50
  },
  ReadingContainer:{
     marginLeft:10, 
  },
  author: {
    fontSize: 16,
    fontWeight: "bold",
  },
  tagline: {
    fontSize: 14,
  },
  textContainer: {
    width: 280, // Set the desired width of the text container
  },
  text: {
    fontSize: 16,
    textAlign: 'left',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft:10
  },
  input: {
    borderColor: 'gray',
    borderRadius:18,
    borderWidth: 1,
    marginRight: 10,
    padding: 5,
    width:'80%',
  },
  addCommentButton:{
    backgroundColor: '#fff', // Change the background color to your desired color
    color: 'white', // Change the text color to your desired color
    padding: 10,
    borderRadius: 20,
  }
  
});

export default CommentPage;



