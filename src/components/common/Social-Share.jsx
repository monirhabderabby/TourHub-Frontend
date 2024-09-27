import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "next-share";

const SocialShare = ({ url, hashTag, quote }) => {
  return (
    <div className="flex items-center gap-x-3">
      <FacebookShareButton url={url} quote={quote} hashtag={hashTag}>
        <FacebookIcon size={25} round />
      </FacebookShareButton>
      <TwitterShareButton url={url} quote={quote} hashtag={hashTag}>
        <TwitterIcon size={25} round />
      </TwitterShareButton>
      <LinkedinShareButton url={url} quote={quote} hashtag={hashTag}>
        <LinkedinIcon size={25} round />
      </LinkedinShareButton>
    </div>
  );
};

export default SocialShare;
