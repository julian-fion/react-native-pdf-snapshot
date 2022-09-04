import { NativeModules } from 'react-native';

export type SnapshotResult = {
  /// Output URI of the snapshot, located in the Documents directory using the filename given in the generate options, randomly generated.
  uri: string;

  /// Output width of the JPEG
  width: number;

  /// Output height of the JPEG
  height: number;
};

export type SnapshotOptions = {
  /// File path or URL to the PDF image
  url: string;

  /// Optional: page number to snapshot. Default to 0
  page?: number;

  /// Optional: DPI (resolution). Defaults to 72.0
  dpi?: number;

  /// Optional: output filename. Defaults to "fion-geopdf-<page_number>-<random_number>"
  output?: string;
};

type PdfSnapshotType = {
  generate(options: SnapshotOptions): Promise<SnapshotResult>;
};

const { PdfSnapshot } = NativeModules;

export default PdfSnapshot as PdfSnapshotType;
