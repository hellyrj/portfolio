import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { socialLinks } from '../../data/social';

const SocialLinks = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaGithub':
        return FaGithub;
      case 'FaLinkedin':
        return FaLinkedin;
      case 'FaTwitter':
        return FaTwitter;
      case 'FaEnvelope':
        return FaEnvelope;
      default:
        return FaEnvelope;
    }
  };

  const getHoverColor = (name: string) => {
    switch (name) {
      case 'GitHub':
        return 'hover:text-gray-900 dark:hover:text-white';
      case 'LinkedIn':
        return 'hover:text-blue-600';
      case 'Twitter':
        return 'hover:text-blue-400';
      case 'Email':
        return 'hover:text-red-600';
      default:
        return 'hover:text-gray-600';
    }
  };

  return (
    <div className="flex space-x-6">
      {socialLinks.map((link) => {
        const Icon = getIcon(link.icon);
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-600 dark:text-gray-400 transition-colors ${getHoverColor(link.name)}`}
            aria-label={link.name}
          >
            <Icon size={24} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;