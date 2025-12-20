const reels = [
  {
    isMuted: true,
    username: "john_doe",
    likeCount: 1240,
    isLiked: true,
    commentCount: 87,
    caption: "Morning vibes 🌅",
    video: "../reels/video3.mp4.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/1.jpg",
    shareCount: 45,
    isFollowed: true
  },
  {
    isMuted: true,
    username: "emma_watson",
    likeCount: 9821,
    isLiked: false,
    commentCount: 342,
    caption: "Weekend mood 💃",
    video: "../reels/video2.mp4.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/2.jpg",
    shareCount: 210,
    isFollowed: false
  },
  {
    isMuted: true,
    username: "tech_guru",
    likeCount: 543,
    isLiked: false,
    commentCount: 29,
    caption: "Coding till midnight 💻",
    video: "../reels/video6.mp4.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/3.jpg",
    shareCount: 18,
    isFollowed: true
  },
  {
    isMuted: true,
    username: "travel_with_me",
    likeCount: 15023,
    isLiked: true,
    commentCount: 654,
    caption: "Lost in the mountains 🏔️",
    video: "../reels/video4.mp4.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/4.jpg",
    shareCount: 512,
    isFollowed: false
  },
  {
    isMuted: true,
    username: "foodie_life",
    likeCount: 3421,
    isLiked: true,
    commentCount: 198,
    caption: "Street food supremacy 🌮",
    video: "../reels/video7.mp4.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/5.jpg",
    shareCount: 133,
    isFollowed: true
  },
  {
    isMuted: true,
    username: "fitness_freak",
    likeCount: 7890,
    isLiked: false,
    commentCount: 412,
    caption: "No pain, no gain 💪",
    video: "../reels/video8.mp4.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/6.jpg",
    shareCount: 276,
    isFollowed: false
  },
  {
    isMuted: true,
    username: "art_daily",
    likeCount: 2145,
    isLiked: true,
    commentCount: 94,
    caption: "Creating something new 🎨",
    video: "../reels/video9.mp4.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/7.jpg",
    shareCount: 61,
    isFollowed: true
  },
  {
    isMuted: true,
    username: "music_vibes",
    likeCount: 11032,
    isLiked: false,
    commentCount: 503,
    caption: "Feel the rhythm 🎶",
    video: "../reels/video10.mp4.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/8.jpg",
    shareCount: 389,
    isFollowed: true
  },
  {
    isMuted: true,
    username: "daily_motivation",
    likeCount: 6789,
    isLiked: true,
    commentCount: 256,
    caption: "One step at a time 🚀",
    video: "../reels/video11.mp4.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/9.jpg",
    shareCount: 174,
    isFollowed: false
  },
  {
    isMuted: true,
    username: "nature_lovers",
    likeCount: 9023,
    isLiked: false,
    commentCount: 341,
    caption: "Peace in nature 🌿",
    video: "../reels/video12.mp4.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/10.jpg",
    shareCount: 298,
    isFollowed: true
  }
];
var allreels = document.querySelector('.all-reels')

function addData() {
  var sum = ''
  reels.forEach(function (elem, idx) {
    sum = sum + `<div class="reel">
                     <video id="video" autoplay loop ${elem.isMuted ? 'muted' : ''} src="${elem.video}"></video>
                     <div class="mute" id=${idx}>
                     ${elem.isMuted ? '<i class="ri-volume-mute-line"></i>' : '<i class="ri-volume-up-line"></i>'}
                    </div>  
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userprofile}" alt="">
                            <h4>${elem.username}</h4>
                            <button id=${idx} class='follow'>${elem.isFollowed ? 'Unfollow' : 'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div id=${idx} class="like">
                            <h4 class="like-icon">${elem.isLiked ? '<i class="love ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line"></i>'}</i></h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div id=${idx} class="share">
                            <h4 class="share-icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon"><i class="ri-more-2-fill"></i></h4>
                        </div>
                </div>
                </div>`

  })

  allreels.innerHTML = sum

}

addData()

allreels.addEventListener('click', function (dets) {
  if (dets.target.className == 'like') {
    if (!reels[dets.target.id].isLiked) {
      reels[dets.target.id].likeCount++
      reels[dets.target.id].isLiked = true
    } else {
      reels[dets.target.id].likeCount--
      reels[dets.target.id].isLiked = false
    }
    addData()
  }
  if (dets.target.className == 'follow') {
    if (!reels[dets.target.id].isFollowed) {
      reels[dets.target.id].isFollowed = true
    } else {
      reels[dets.target.id].isFollowed = false
    }
    addData()
  }
  if (dets.target.className == 'share') {
    if (reels[dets.target.id].isFollowed) {
      reels[dets.target.id].shareCount++
    }
    addData()
  }
  if (dets.target.className == 'mute') {
    if (!reels[dets.target.id].isMuted) {
      reels[dets.target.id].isMuted = true
    } else {
      reels[dets.target.id].isMuted = false
    }
    addData()
  }
})
const videos = document.querySelectorAll("video");

videos.forEach(video => {
  video.addEventListener("click", () => {
    if (video.paused) {
      videos.forEach(v => v.pause());
      video.play();
    } else {
      video.pause();
    }
  });
});

