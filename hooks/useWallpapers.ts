export interface Wallpaper {
  name: string;
  url: string;
   onPress?: () => void;
}

interface FullWallpaper extends Wallpaper {
liked: boolean;
suggested: boolean;
library: boolean;}
export function useSuggestedWallpapers(): FullWallpaper[] {
  const wallpapers = useWallpapers();
  return wallpapers.filter((wallpaper: FullWallpaper) => wallpaper.suggested);
}

export function useLikedWallpapers(): FullWallpaper[] {
  const wallpapers = useWallpapers();
  return wallpapers.filter((wallpaper: FullWallpaper) => wallpaper.liked);
}
export function useLibrary(): FullWallpaper[] {
  const wallpapers = useWallpapers();
  return wallpapers.filter((wallpaper: FullWallpaper) => wallpaper.library);
}

export function useWallpapers(): FullWallpaper[] {
  return [
    {
      url: "https://images.unsplash.com/photo-1733919504972-4486ea3ddc89?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=57463",
      name: "osaka",
      liked: true, 
      suggested: false,
      library: true,
    },
    {
      url: "https://images.unsplash.com/photo-1733918462841-95dff2236d77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjN8fHxlbnwwfHx8fHw%3D", 
      name: "chinatown",
        liked: true, 
      suggested: false,
      library: false,

    },
    {
      url: "https://images.unsplash.com/photo-1542931287-023b922fa89b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZldWRhbCUyMGphcGFufGVufDB8fDB8fHww",
      name: "Suzume Stairs",
        liked: false, 
      suggested: false,
      library: true,
    },
    {
      url: "https://images.unsplash.com/photo-1490761668535-35497054764d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZldWRhbCUyMGphcGFufGVufDB8fDB8fHww",
      name: "Shinjuku",
        liked: false, 
      suggested: true,
      library: false,
    },
    {
      url: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZldWRhbCUyMGphcGFufGVufDB8fDB8fHww",
      name: "Tokyo Tower",
        liked: false, 
      suggested: false,
      library: true,
    },
    {
      url: "https://images.unsplash.com/photo-1512692723619-8b3e68365c9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZldWRhbCUyMGphcGFufGVufDB8fDB8fHww2",
      name: "Feudal Tower",
        liked: false, 
      suggested: true,
      library: false,
    },
  ];
}
