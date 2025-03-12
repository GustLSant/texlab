export type Position2D = {
    x: number,
    y: number,
}

export type OverlayTextureType = {
    id: number,
    imageData: string,
    position: Position2D,
    opacity: number,
    zoom: number,
    handlePosChangeFunc: (id:number, pos: Position2D) => void,
}