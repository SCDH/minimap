class AnnotatedData<MD> {
  length: number
  annotations: [Annotation<MD>]
}

class Annotation<MD> {
  range: [number, number]
  metadata: MD
}

function drawMinimap<MD>(ad: AnnotatedData<MD>): void {
  // TODO
}
