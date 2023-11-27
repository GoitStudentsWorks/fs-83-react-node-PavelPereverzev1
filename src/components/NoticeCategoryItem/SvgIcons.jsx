


export const PetIcon = () => {
    return(
        <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24">
              
    <path d="M20.482 19.149c-0.356-2.644-2.011-4.897-4.429-6.024s-5.208-0.948-7.462 0.479l-5.432 3.439c-0.901 0.571-1.58 1.399-1.964 2.394s-0.436 2.065-0.15 3.093c0.286 1.028 0.882 1.918 1.725 2.573s1.852 1.014 2.919 1.037l0.070 0.001c2.676 0.079 5.219 1.275 6.986 3.289 0.456 0.519 1.004 0.93 1.617 1.216 0.333 0.155 0.686 0.274 1.053 0.353 1.043 0.224 2.108 0.109 3.080-0.332s1.757-1.169 2.274-2.103c0.516-0.934 0.714-1.987 0.572-3.044l-0.857-6.372zM17.717 28.961c-1.236 0.562-2.668 0.254-3.563-0.766-1.064-1.213-2.364-2.177-3.801-2.848-1.436-0.67-3.010-1.045-4.622-1.081l-0.046-0.001c-1.338-0.049-2.473-0.942-2.833-2.236-0.363-1.308 0.164-2.674 1.31-3.401l5.432-3.439c1.712-1.084 3.829-1.22 5.665-0.364s3.093 2.566 3.363 4.574l0.857 6.372c0.181 1.346-0.528 2.628-1.763 3.19z"></path>
    <path d="M6.295 12.527c1.103 0.077 2.165-0.346 2.991-1.19 0.786-0.803 1.264-1.901 1.346-3.091s-0.241-2.342-0.909-3.246c-0.702-0.949-1.696-1.514-2.798-1.59-2.216-0.154-4.161 1.766-4.336 4.281-0.137 2.003 0.89 3.786 2.433 4.506 0.394 0.184 0.822 0.298 1.272 0.329zM4.461 7.821c0.103-1.482 1.151-2.621 2.336-2.539 0.214 0.015 0.422 0.069 0.618 0.161 0.302 0.141 0.576 0.369 0.8 0.673 0.403 0.546 0.597 1.257 0.546 2.002s-0.341 1.423-0.816 1.908c-0.435 0.444-0.975 0.668-1.52 0.63l-0.001 0c-1.184-0.081-2.064-1.353-1.963-2.835z"></path>
    <path d="M14.188 11.529c2.349 1.095 5.275-0.191 6.523-2.867s0.353-5.746-1.996-6.841c-2.349-1.095-5.275 0.191-6.523 2.868s-0.352 5.745 1.996 6.84zM17.923 3.521c1.411 0.658 1.9 2.609 1.089 4.348s-2.619 2.618-4.031 1.96-1.9-2.608-1.089-4.347c0.811-1.739 2.619-2.619 4.031-1.961z"></path>
    <path d="M20.992 16.152l0 0c0.305 0.288 0.647 0.518 1.014 0.689 1.713 0.799 3.964 0.33 5.495-1.289 0.881-0.932 1.401-2.109 1.463-3.315 0.065-1.262-0.371-2.404-1.23-3.217s-2.025-1.184-3.281-1.047c-1.201 0.131-2.347 0.716-3.227 1.648-1.858 1.966-1.963 4.896-0.234 6.531zM22.588 10.909c0.575-0.609 1.309-0.989 2.067-1.071 0.701-0.076 1.337 0.118 1.79 0.546s0.682 1.052 0.645 1.756c-0.039 0.761-0.378 1.516-0.953 2.124-1.148 1.215-2.878 1.45-3.857 0.525-0.978-0.925-0.84-2.665 0.308-3.88z"></path>
    <path d="M30.227 19.769l-0-0.001c-1.062-1.952-3.726-2.563-5.94-1.362-2.213 1.203-3.152 3.77-2.093 5.721 0.386 0.712 0.986 1.246 1.699 1.579 1.243 0.58 2.833 0.548 4.241-0.215 2.213-1.203 3.152-3.769 2.093-5.722zM27.239 23.842c-1.307 0.709-2.831 0.435-3.397-0.609-0.566-1.043 0.035-2.469 1.339-3.178 0.867-0.47 1.83-0.508 2.545-0.174 0.362 0.169 0.661 0.433 0.852 0.784 0.565 1.044-0.036 2.469-1.339 3.178z"></path>
              </svg>
    )
    
    }
    
    export const FavoriteIcon = ({ isFavorite }) => {
        return (
          <svg
            fill={isFavorite ? '#54ADFF' : '#CCE4FB'}
            stroke="#54ADFF"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="24"
            height="24"
            style={{ transition: 'fill 0.3s' }} // Додано перехід для плавного змінювання кольору
          >
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeMiterlimit="4"
              strokeWidth="2"
              d="M5.775 16.063l10.225 10.603 10.225-10.603c1.137-1.179 1.775-2.777 1.775-4.444 0-3.471-2.714-6.285-6.061-6.285-1.607 0-3.149 0.662-4.286 1.841l-1.653 1.715-1.653-1.715c-1.137-1.179-2.678-1.841-4.286-1.841-3.347 0-6.061 2.814-6.061 6.285 0 1.667 0.639 3.266 1.775 4.444z"
            ></path>
          </svg>
        );
      };
    export const LocationIcon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 32" width="32" height="32">
    <path fill="none" stroke="#54adff"  strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="2" d="M27.677 14.667c0 5.891-4.776 10.667-10.667 13.333-5.891-2.667-10.667-7.442-10.667-13.333s4.776-10.667 10.667-10.667c5.891 0 10.667 4.776 10.667 10.667z"></path>
    <path fill="none" stroke="#54adff"  strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="2" d="M21.010 14.667c0 2.209-1.791 4-4 4s-4-1.791-4-4c0-2.209 1.791-4 4-4s4 1.791 4 4z"></path>
    </svg>
    )
    
    }
    
    export const AgeIcon = () => {
    
        return(
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 32" width="24" height="24">
    <path fill="none" stroke="#54adff"  strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="2" d="M17.010 9.333v6.667l4 4M29.010 16c0 6.627-5.373 12-12 12s-12-5.373-12-12c0-6.627 5.373-12 12-12s12 5.373 12 12z"></path>
    </svg>
        )
    }
    
    export const MaleIcon = ()  => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 32" width="24" height="24">
    <path fill="none" stroke="#54adff" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="2" d="M17.010 14.667c-3.682 0-6.667 2.985-6.667 6.667s2.985 6.667 6.667 6.667c3.682 0 6.667-2.985 6.667-6.667s-2.985-6.667-6.667-6.667zM17.010 14.667v-10.667M17.010 4l5.333 5.333M17.010 4l-5.333 5.333"></path>
    </svg>
    )
        
    }
    
    export const FemaleIcon = ()  => {
        return(
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 32" width="24" height="24">
       <path fill="none" stroke="#54adff"  strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="2" d="M17.010 17.333c3.682 0 6.667-2.985 6.667-6.667s-2.985-6.667-6.667-6.667c-3.682 0-6.667 2.985-6.667 6.667s2.985 6.667 6.667 6.667zM17.010 17.333v10.667M13.010 24h8"></path>
        </svg>
        )
            
        }

    export const RemoveIcon = () => {
return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 32" width="24" height="24">
<path fill="none" stroke="#54adff" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" stroke-width="2" d="M24 8v16c0 1.473-1.194 2.667-2.667 2.667h-10.667c-1.473 0-2.667-1.194-2.667-2.667v-16M20 8v-1.333c0-1.473-1.194-2.667-2.667-2.667h-2.667c-1.473 0-2.667 1.194-2.667 2.667v1.333M5.333 8h21.333M13.333 13.333v8M18.667 13.333v8"></path>
</svg>
)

    }
    