export default function Profile() {
    return (
        <Admin
      //   authProvider={authProvider}
      dataProvider={fakeDataProvider({
        posts: [
          {
            id: "1",
            title: "Post1",
            body: "This is post discription",
            publishedAt: "01-02-2022",
          },
          {
            id: "2",
            title: "Post2",
            body: "This is post discription",
            publishedAt: "01-02-2022",
          },
          {
            id: "3",
            title: "Post3",
            body: "This is post discription",
            publishedAt: "01-02-2022",
          },
          {
            id: "4",
            title: "Post4",
            body: "This is post discription",
            publishedAt: "01-02-2022",
          },
        ],
        myposts: [
          {
            id: "1",
            title: "Post1",
            body: "This is post discription",
            publishedAt: "01-02-2022",
          },
          {
            id: "2",
            title: "Post2",
            body: "This is post discription",
            publishedAt: "01-02-2022",
          },
          {
            id: "3",
            title: "Post3",
            body: "This is post discription",
            publishedAt: "01-02-2022",
          },
          {
            id: "4",
            title: "Post4",
            body: "This is post discription",
            publishedAt: "01-02-2022",
          },
        ]
      })}
    >
      <Resource name="posts" list={PostList} create={PostCreate} show={PostShow} edit={PostEdit} />
      <Resource name="myposts" list={MyPostList} create={PostCreate} show={PostShow} edit={PostEdit} />
      <Resource name="gridView" list={Grid} create={PostCreate} show={PostShow} edit={PostEdit}/> 
    </Admin>
    );
}