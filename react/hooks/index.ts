export function useUpdate() {
  const [,setState]= useState({})
  return useCallback(() => setState({}),[])
}
