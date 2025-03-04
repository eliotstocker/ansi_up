export interface AU_Color {
    rgb: number[];
    class_name: string;
}
export interface TextWithAttr {
    fg: AU_Color;
    bg: AU_Color;
    bold: boolean;
    underline: boolean;
    italic: boolean;
    text: string;
}
declare enum PacketKind {
    EOS = 0,
    Text = 1,
    Incomplete = 2,
    ESC = 3,
    Unknown = 4,
    SGR = 5,
    OSCURL = 6
}
export interface TextPacket {
    kind: PacketKind;
    text: string;
    url: string;
}
export default class AnsiUp {
    VERSION: string;
    private ansi_colors;
    private palette_256;
    private fg;
    private bg;
    private bold;
    private underline;
    private italic;
    private _use_classes;
    private _csi_regex;
    private _osc_st;
    private _osc_regex;
    private _url_whitelist;
    private _buffer;
    constructor();
    set use_classes(arg: boolean);
    get use_classes(): boolean;
    set url_whitelist(arg: {});
    get url_whitelist(): {};
    private setup_palettes;
    private escape_txt_for_html;
    private append_buffer;
    private get_next_packet;
    ansi_to_html(txt: string): string;
    private loop_over_packets;
    private with_state;
    private process_ansi;
    private transform_to_html;
    private process_hyperlink;
    private sub_string_to_html;
}
declare function rgx(tmplObj: any, ...subst: any[]): RegExp;
declare function rgxG(tmplObj: any, ...subst: any[]): RegExp;
