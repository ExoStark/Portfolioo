import styled from 'styled-components';

// --- Global Styles & Reusable Mixins ---
// You can define reusable mixins for common styles like gradients, transitions, etc.
// For this example, I'll keep it simple and add them directly.

// --- Image and Card Components ---
export const ImgContainer = styled.figure`
  margin: 0;
  position: relative;
  overflow: hidden;
`;

export const Picture = styled.picture`
  display: block;
  position: relative;
  overflow: hidden;
  padding-top: 56.25%; /* Maintains a 16:9 aspect ratio */
`;

export const PictureImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover; /* Ensures the image fills the container without distortion */
`;

// --- Text and Content Components ---
export const TitleContent = styled.div`
  padding: 0 15px;
  z-index: 20;
  width: 100%;
  font-size: 1.75rem;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.primary1};
  padding: 2rem 0 0.5rem;
  font-size: ${({ title }) => (title ? '3rem' : '2rem')};
  /* Removed unused -webkit properties */
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 15px;
  line-height: 24px;
`;

// --- Interactive Components ---
export const ExternalLinks = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 1.6rem;
  padding: 0.75rem 1rem;
  background-image: linear-gradient(
    270deg,
    ${({ theme }) => theme.colors.background2} 0%,
    ${({ theme }) => theme.colors.accent1} 100%
  );
  color: #fefefe;
  transition: background-image 0.3s ease-in-out;
  text-decoration: none; /* Good practice for links */

  &:hover {
    background-image: linear-gradient(
      270deg,
      ${({ theme }) => theme.colors.accent1} 0%,
      ${({ theme }) => theme.colors.background2} 100%
    );
  }
  
  &.link-to {
    margin: auto;
    min-height: 40px;
    max-width: 160px;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background-color: transparent;
  border: none; /* Resetting default button styles */
  cursor: pointer; /* Provides a clear interactive indicator */
  transition: background-color 300ms ease-in-out;

  svg {
    opacity: 0;
    visibility: hidden;
    transform: scale(0.15);
    transition: transform 300ms ease-in-out, opacity 300ms ease-in-out, visibility 300ms ease-in-out;
  }
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.25);
    
    svg {
      opacity: 1;
      visibility: visible;
      transform: scale(1);
    }
  }
`;

// --- Lists and Tags ---
export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 15px;
  list-style: none; /* Removes bullet points for list items */
`;

export const Tag = styled.li`
  font-size: 1.5rem;
  opacity: 0.75;
  text-decoration: underline;
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin-right: auto;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  border: 0;
  background: linear-gradient(
    121.57deg,
    ${({ theme }) => theme.colors.button} 18.77%,
    ${({ theme }) => theme.colors.accent1} 60.15%
  );
`;
