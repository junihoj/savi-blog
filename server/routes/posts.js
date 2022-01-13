import express from 'express';
import { 
    allPost,
     
} from '../controllers/posts';


const router = express.Router();


router.get(`/all_post`, allPost)
// router.get(`/post/create`, create)

module.exports = router;