interface Source {
    protocol: "rtsp" | "mtp";
    cam_id: string;
    url: string;
    note: string;
}

export default Source;