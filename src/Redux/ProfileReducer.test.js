
import profileReducer, {addPost, deletePost} from "./ProfileReducer";

let State = {
    postData: [
        {id: '0', message: 'hey', like: '21'},
        {id: '1', message: 'hello', like: '15'},
    ],
}

test('new post lenght encremented ', () => {
    //test data
    let action = addPost('hello Mert')

    //action
    let newState = profileReducer(State, action)
    //axpectation
    expect(newState.postData.length).toBe(3)
});
test('new post lenght dencremented ', () => {
    //test data
    debugger
    let action = deletePost(1)

    //action
    let newState = profileReducer(State, action)
    //axpectation
    expect(newState.postData.length).toBe(1)

});
test('after deleteing lenght shouldnt be changed if id is incorrect ', () => {
    //test data
    let action = deletePost(1000)

    //action
    let newState = profileReducer(State, action)
    //axpectation
    expect(newState.postData.length).toBe(2)

});
