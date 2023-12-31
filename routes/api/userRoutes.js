const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    createFriend,
    deleteFriend
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);
router.route('/:userId').get(getSingleUser).put(updateUser)
router.route('/:userId').get(getSingleUser).delete(deleteUser)

// /api/users/:userId/friends/:friendId

router.route('/:userId/friends/:friendId').get(getSingleUser).post(createFriend)
router.route('/:userId/friends/:friendId').get(getSingleUser).delete(deleteFriend)


module.exports = router;